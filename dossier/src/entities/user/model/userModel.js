export function createUserModel(source) {
  return {
    id: source.id ?? 'user-1',
    firstName: source.firstName,
    lastName: source.lastName,
    middleName: source.middleName,
    photo: source.photo ?? '',
  }
}

export function getUserFullName(user) {
  return [user.lastName, user.firstName, user.middleName].filter(Boolean).join(' ')
}
