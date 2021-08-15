// // class taikhoan email matkhau, name, function doi ten , function doimatkhau, function in ra email, matkhau, name

class TaiKhoan {
    name; email; address; password
    constructor(name, email, address, password) {
        this.name = name
        this.email = email
        this.address = address
        this.password = password
        this.phone = phone
    }

    ChangePassword(password) {
        this.password = password
    }

    Info(){
        console.log(this.name)
        console.log(this.email)
        console.log(this.address)
        console.log(this.password)
    }
}

  const account = new TaiKhoan('Cuong','cuong@gmail.com','Nha Trang','caicui123')
  account.Info()
  account.ChangePassword('cu123')
  console.log(account)