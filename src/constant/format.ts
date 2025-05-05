type IFormat = 'MOVIE' | 'TV' | 'OVA';

export const Format = (string: IFormat) => {
  if (string === 'MOVIE') return 'film'
  if (string === 'TV') return 'anime'
  if (string === 'OVA') return 'ova'
  else return 'default'
}

export const Color = (string: IFormat): string => {
  if (string === "MOVIE") return "bg-danger-200 text-danger-600"
  else if (string === "TV") return "bg-primary-200 text-primary-600"
  else if (string === "OVA") return "bg-secondary-200 text-secondary-600"
  else return "bg-gray-200 text-gray-600"
}