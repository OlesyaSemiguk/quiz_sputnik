export function deleteRefreshToken() {
  document.cookie = `refresh_token=1 ;max-age=0`
}

export function getCookie(name: string) {
  var matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)',
    ),
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}
