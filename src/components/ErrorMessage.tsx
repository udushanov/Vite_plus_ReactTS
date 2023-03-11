interface IErrorMessage {
  error: string
}

export function ErrorMessage({error}: IErrorMessage) {
  return (
    <p className='text-center text-red-600'>{error}</p>
  )
}