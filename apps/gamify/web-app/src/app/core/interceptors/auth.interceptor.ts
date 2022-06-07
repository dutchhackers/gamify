import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.includes('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=')) {
      return next.handle(req);
    }

    // Get the auth token from the service.
    const authToken = localStorage.getItem('accessToken');
    
    if (authToken) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer '+ authToken)
      });
    }

    // send cloned request with header to the next handler.
    return next.handle(req);
  }
}