import { Injectable } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { RepositoryService } from 'src/services/repository.service';

@Injectable()
export class OrganizationService extends RepositoryService {

    constructor(public http: HttpService) {
        super(http, { controller: { name: "organization" } });
    }
}


