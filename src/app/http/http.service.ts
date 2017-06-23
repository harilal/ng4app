import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, XHRBackend, RequestOptions, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/onErrorResumeNext';

import { HttpObject } from './http.object';

@Injectable()
export class HttpService extends Http {

	private auth_token: string;
	private count = 0;
	private complete = 0;
	BASE_URL: string = "https://logicapi.herokuapp.com/api/";
	//BASE_URL: string = "https:/api1.karisoft.com/";
	constructor(_backend: XHRBackend, _defaultOptions: RequestOptions) {
		super(_backend, _defaultOptions)
	}

	request(url: any, options: RequestOptionsArgs): Observable<Response> {

		/*if (options == null) {
			options = new RequestOptions();
		}
		this.auth_token = window.sessionStorage.getItem('auth_token');
		if (options.headers == null) {
			options.headers = new Headers();
			options.headers.append('Authorization', 'Bearer ' + this.auth_token);
			options.headers.append('Accept', 'application/json');
		}*/
		console.log("gffd", options)
		return super.request(url, this.getRequestOptionArgs());
	}
	get(url: string, options?: HttpObject): Observable<Response> {
		if ((options && options.global) || !options) {
			this.count++;
		}
		this.count++;
		url = this.BASE_URL + url;

		this.auth_token = window.sessionStorage.getItem('auth_token');
		const headers = new Headers();
		/*if (this.auth_token) {
			headers.append('Authorization', 'Bearer ' + this.auth_token);
			headers.append('Accept', 'application/json');
		}*/
		headers.append('Content-Type', 'application/json');
		return super.get(url, {
			headers: headers
		}).map((data: Response) => {
			//console.log(url, options);
			return this.httpComplete(data, options);
			//return data.json() 
		}).catch((error, caught) => this.handleError(error, caught));
	}
	
	post(url: string, data: Object, options?: HttpObject) {
		if ((options && options.global) || !options) {
			this.count++;
		}

		this.auth_token = window.sessionStorage.getItem('auth_token');
		const headers = new Headers();
		url = this.BASE_URL + url;


		if (this.auth_token) {
			//headers.append('Authorization', 'Bearer ' + this.auth_token);
			headers.append('Content-Type', 'application/json');
		}

		return super.post(url, data, {
			headers: headers
		}).map((data: Response) => {

			return this.httpComplete(data, options);
			//return data.json()

		}).catch((error, caught) => this.handleError(error, caught));
	}
	put(url: string, data: Object, options?: HttpObject) {
		if ((options && options.global) || !options) {
			this.count++;
		}

		this.auth_token = window.sessionStorage.getItem('auth_token');
		const headers = new Headers();
		url = this.BASE_URL + url;


		if (this.auth_token) {
			//headers.append('Authorization', 'Bearer ' + this.auth_token);
			headers.append('Content-Type', 'application/json');
		}

		return super.put(url, data, {
			headers: headers
		}).map((data: Response) => {

			return this.httpComplete(data, options);
			//return data.json()

		}).catch((error, caught) => this.handleError(error, caught));
	}
	delete(url: string, data?: any, options?: HttpObject) {
		if ((options && options.global) || !options) {
			this.count++;
		}

		this.auth_token = window.sessionStorage.getItem('auth_token');
		const headers = new Headers();
		url = this.BASE_URL + url;
		if (this.auth_token) {
			//headers.append('Authorization', 'Bearer ' + this.auth_token);
			headers.append('Content-Type', 'application/json');
		}

		return super.delete(url, {
			headers: headers,
			body: data
		}).map((data: Response) => {

			return this.httpComplete(data, options);
			//return data.json()

		}).catch((error, caught) => this.handleError(error, caught));
	}

	private handleError(error: any, caught?: Observable<any>) {

		if (caught)
			//return caught.share();

			/*if (error.status === 401) {
				sessionStorage.removeItem('auth_token');
				sessionStorage.removeItem('user_info');
				location.reload();
				return Observable.throw(error);
			}*/
			this.count--;
		console.log(error)


		return Observable.throw(error);
	}
	private httpComplete(data, options?: HttpObject) {
		if ((options && options.global) || !options) {
			this.complete++;
		}
		return data.json()
	}

	private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
		if (options == null) {
			options = new RequestOptions();
		}
		this.auth_token = window.sessionStorage.getItem('auth_token');
		if (options.headers == null) {
			options.headers = new Headers();
			options.headers.append('Authorization', 'Bearer ' + this.auth_token);
			options.headers.append('Accept', 'application/json');
		}
		//options.headers.append('Content-Type', 'application/json');

		return options;
	}
}
