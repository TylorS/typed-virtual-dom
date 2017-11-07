export interface HTMLHyperlinkElementUtils {
  // Is a USVString containing a '#' followed by the fragment identifier of the URL.
  hash?: USVString
  // Is a USVString containing the protocol scheme of the URL, including the final ':'.
  protocol?: USVString
  // Is a USVString containing the host, that is the hostname, and then, if the
  // port of the URL is not empty (which can happen because it was not specified
  // or because it was specified to be the default port of the URL's scheme),
  // a ':', and the port of the URL.
  host?: USVString
  // Is a USVString containing the domain of the URL.
  hostname?: USVString
  // Is a USVString containing the port number of the URL.
  port?: USVString
  // Is a USVString containing the whole URL.
  href?: USVString
  // Is a USVString containing an initial '/' followed by the path of the URL.
  pathname?: USVString
  // Is a USVString containing a '?' followed by the parameters of the URL.
  search?: USVString
  // Is a USVString containing the username specified before the domain name.
  username?: USVString
  // Is a USVString containing the password specified before the domain name.
  password?: USVString
}
