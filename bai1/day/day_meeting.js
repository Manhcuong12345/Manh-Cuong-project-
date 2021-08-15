class MeetingController {

    static settingTime(meeting) {
        meeting.day_of_week = new Date(start_time).getDay()
        meeting.time = {
            start: (meeting.start_time + 25200000) % 86400000,
            end: (meeting.end_time + 25200000) % 86400000,
            date: new Date(meeting.start_time).getDate()
        }
    }

    static repeatDaily(repeat_meetings, meeting) {
        let time = 86400000
        while (1 == 1) {
            let repeat_meeting = {
                ...meeting.toObject()
            }
            delete repeat_meeting._id
            repeat_meeting.start_time = meeting.start_time + time
            repeat_meeting.end_time = meeting.end_time + time
            repeat_meeting.day_of_week = new Date(meeting.start_time).getDay()
            repeat_meeting.time.date = new Date(meeting.start_time).getDate()
            repeat_meeting.clone = true
            repeat_meeting.clone_from = meeting._id
            if (repeat_meeting.start_time > meeting.until_date) {
                break
            }
            time = time + 86400000
            repeat_meetings.push(repeat_meeting)
        }
    }

    static repeatWeekly(repeat_meetings, meeting) {
        let time = 604800000
        while (1 == 1) {
            let repeat_meeting = {
                ...meeting.toObject()
            }
            delete repeat_meeting._id
            repeat_meeting.start_time = meeting.start_time + time
            repeat_meeting.end_time = meeting.end_time + time
            //ccho biet lap la trong thang nao
            repeat_meeting.time.date = new Date(meeting.start_time).getDate()
            repeat_meeting.clone = true
            repeat_meeting.clone_from = meeting._id
            if (repeat_meeting.start_time > meeting.until_date) {
                break
            }
            time = time + 604800000
            repeat_meetings.push(repeat_meeting)
        }
    }

    static repeatMonthly(repeat_meetings, meeting) {
        let start_time = new Date(start_time)
        let end_time = new Date(end_time)
        start_time.setMonth(start_time.getMonth() + 1)
        end_time.setMonth(end_time.getMonth() + 1)
        while (1 == 1) {
            let repeat_meeting = {
                ...meeting.toObject()
            }
            delete repeat_meeting._id
            repeat_meeting.start_time = start_time.getTime()
            repeat_meeting.end_time = end_time.getTime()
            //cho biet lap trong tuan nao
            repeat_meeting.day_of_week = new Date(start_time).getDay()
            repeat_meeting.clone = true
            repeat_meeting.clone_from = meeting._id
            if (repeat_meeting.start_time > meeting.until_date) {
                break
            }
            start_time.setMonth(start_time.getMonth() + 1)
            end_time.setMonth(end_time.getMonth() + 1)
            repeat_meetings.push(repeat_meeting)
        }
    }

    static repeatMeeting(meeting) {
        let repeat_meetings = []
        if (meeting.repeat == 1) {
            MeetingController.repeatDaily(repeat_meetings, meeting)
        }
        if (meeting.repeat == 2) {
            MeetingController.repeatWeekly(repeat_meetings, meeting)
        }
        if (meeting.repeat == 3) {
            MeetingController.repeatMonthly(repeat_meetings, meeting)
        }
        if (repeat_meetings.length > 0) {
            Meeting.create(repeat_meetings)
        }
    }

    static filterMeeting(meeting) {
        let filter = {
            "start_time": { $lte: meeting.until_date, $gte: meeting.start_time },
            "_id": { $ne: meeting._id },
            "$or": [
                {
                    "start": { $gte: meeting.start_time, $lte: meeting.end_time }
                },
                {
                    "end": { $gte: meeting.start_time, $lte: meeting.end_time }
                }
            ]
        }
        if (!meeting.repeat || meeting.repeat == 0){
           filter = {
               "$or":[
                   {"start_time": {$gte:meeting.start_time, "end_time": meeting.end_time}},
                   {"end_time": {$gte:meeting.start_time, "end_time": meeting.end_time}}
               ]
           }  
        } 
        if(meeting.repeat == 2){
            filter.day_of_week = meeting.day_of_week
        }
        if(meeting.repeat ==3){
            filter["time.date"] = meeting.time.date
        }
        return filter
    }

    static async checkRoomMeeting(meeting) {
        let filter = {
            "$or":[
                {"start_time": {$gte:meeting.start_time, "end_time": meeting.end_time}},
                {"end_time": {$gte:meeting.start_time, "end_time": meeting.end_time}}
            ],
            "_id":{$ne:meeting._id},
        }

        const meetings = await Meeting.countDocuments(filter)
        return meetings
    }

    static async checkRoomAble(meeting) {
        let filter = MeetingController.filterMeeting()
        const meetings = await Meeting.containsDocuments(filter)
        return meetings
    }
}
