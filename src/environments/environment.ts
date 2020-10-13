export const environment = {
  production: false,
  TOKEN: {
    AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
    CLIENTE_ID: 'e36v1MPQk2jbz9KM4SmKhk8Cyw0a',
    RESPONSE_TYPE: 'id_token token',
    SCOPE: 'openid email role',
    REDIRECT_URL: 'http://localhost:4200/',
    SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
    SIGN_OUT_REDIRECT_URL: 'http://localhost:4200/',
  },
  CONFIGURACION_SERVICE: 'http://testapi.intranetoas.udistrital.edu.co:8086/v1/',
  NOTIFICACION_SERVICE: 'ws://testapi.intranetoas.udistrital.edu.co:8116/ws/join',
};
