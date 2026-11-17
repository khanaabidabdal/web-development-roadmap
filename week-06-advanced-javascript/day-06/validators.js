export class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name='ValidationError';
    }
}

const ALLOWED_PRIORITIES=['low','medium','high'];

export function validateTaskInput(input){
    if(
        input===null||
        typeof input!=='object'||
        Array.isArray(input)
    ){
        throw new ValidationError(
            'Task input must be an object.'
        );
    }

    const {title,description='',priority}=input;

    if(typeof title!=='string'){
        throw new ValidationError(
            'Task title must be a string.'
        );
    }

    const cleanTitle=title.trim();

    if(cleanTitle.length<3||cleanTitle.length>100){
        throw new ValidationError(
            'Task title must contain 3 to 100 characters.'
        );
    }

    if(typeof description!=='string'){
        throw new ValidationError(
            'Task description must be a string.'
        );
    }

    const cleanDescription=description.trim();

    if(cleanDescription.length>500){
        throw new ValidationError(
            'Task description cannot exceed 500 characters.'
        );
    }

    if(!ALLOWED_PRIORITIES.includes(priority)){
        throw new ValidationError(
            'Priority must be low,medium or high.'
        );
    }

    return{
        title:cleanTitle,
        description:cleanDescription,
        priority
    };
}