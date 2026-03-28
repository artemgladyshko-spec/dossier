export type CareerEvent = {
  id: string
  type: 'appointment' | 'dismissal' | 'promotion'
  date: string
  court: string
  position: string
}
