import { Request , Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function CreateCourse(request: Request, response: Response){
  CreateCourseService.execute({
    name: 'Nodejs',
    educator: 'Dani',
    duration: 10
  });

  CreateCourseService.execute({
    name: 'Reactjs',
    educator: 'Diego',
  });
  return response.send();
}