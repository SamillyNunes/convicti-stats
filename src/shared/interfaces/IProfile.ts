import type IPermission from './IPermission'

export default interface IProfile {
  id: string
  name: string
  total_users: number
  permissions: IPermission[]
}
