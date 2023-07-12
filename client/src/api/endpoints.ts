export const WS_BASE_URL = '/server/ws/';
export const WEB_SOCKET_ROOT = calculateWebSocketRoot(WS_BASE_URL);

function calculateWebSocketRoot(webSocketPath: string) {
  const location = window.location;
  const webProtocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
  return webProtocol + '//' + location.host + webSocketPath;
}
