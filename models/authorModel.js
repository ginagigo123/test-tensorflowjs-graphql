/* eslint-disable no-unused-vars */
class AuthorModel {
  async selectAll (conn) {
    try {
      const query = 'SELECT * FROM User;'
      const [rows, fields] = await conn.execute(query)

      return rows
    } catch (err) {
      console.error(`[ERROR] AuthorModel.selectAll :\n ${err}`)
    }
  }

  async selectUser (conn, userId) {
    const _userId = userId

    try {
      const query = `SELECT * FROM User WHERE userId=${_userId};`
      const [rows, fields] = await conn.execute(query)

      return rows[0]
    } catch (err) {
      console.error(`[ERROR] AuthorModel.selectUser :\n ${err}`)
    }
  }

  async createUser (conn, args) {
    let _userName
    let _userOrder

    if ('userName' in args && 'userOrder' in args) {
      _userName = args.userName
      _userOrder = args.userOrder
    } else {
      throw new Error('User Name is null')
    }
    try {
      const query = `INSERT INTO User (userName, userOrder) VALUES ('${_userName}', '${_userOrder}');`
      const [rows, fields] = await conn.execute(query)

      return rows.insertId
    } catch (err) {
      console.error(`[ERROR] AuthorModel.createUser :\n ${err}`)
    }
  }

  async updateUser (conn, args, author) {
    const _userId = args.userId
    const _userName = author.userName
    const _userOrder = author.userOrder

    try {
      const query = `UPDATE User SET userName = '${_userName}', userOrder = '${_userOrder}' WHERE userId = ${_userId};`
      const [rows, fields] = await conn.execute(query)

      return _userId
    } catch (err) {
      console.error(`[ERROR] AuthorModel.updateUser :\n ${err}`)
    }
  }

  async deleteUser (conn, userId) {
    const _userId = userId

    try {
      const query = `DELETE from User WHERE userId = ${_userId};`
      const [rows, fields] = await conn.query(query)

      return `Delete user ${_userId} successful!`
    } catch (err) {
      console.error(`[ERROR] AuthorModel.deleteUser :\n ${err}`)
    }
  }
}

export default new AuthorModel()
