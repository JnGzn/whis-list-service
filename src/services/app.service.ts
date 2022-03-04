import axios, { AxiosPromise, AxiosResponse } from "axios";
import { response } from "express";
import { PersistenceService } from './persistence/persistence.service';

export  class ServiceTodo {

    public persistenceService: PersistenceService;

    // Constructor Clase ServiceTodo
    constructor(){
        this.persistenceService = new PersistenceService()
    }

}