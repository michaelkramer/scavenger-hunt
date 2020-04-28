import * as express from "express";

export interface Request extends express.Request {
  user?: any;
}

export interface Response extends express.Response {}

export interface NextFunction extends express.NextFunction {}
