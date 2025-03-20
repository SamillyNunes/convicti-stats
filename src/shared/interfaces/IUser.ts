import type IProfile from './IProfile'

export default interface IUser {
  id: string
  name: string
  email: string
  active: boolean
  profile_id: number
  profile: IProfile
}
