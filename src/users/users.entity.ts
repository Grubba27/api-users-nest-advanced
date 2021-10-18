import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class User {
  id: number;

  @IsNotEmpty({
    message: (validationArguments) => {
      return returnErrorMessage(validationArguments.targetName);
    },
  })
  @IsString()
  firstName: string;

  @IsNotEmpty({
    message: (validationArguments) => {
      return returnErrorMessage(validationArguments.targetName);
    },
  })
  @IsString()
  lastName: string;

  @IsNotEmpty({
    message: (validationArguments) => {
      return returnErrorMessage(validationArguments.targetName);
    },
  })
  @IsString()
  fullName: string;

  @IsNotEmpty({
    message: (validationArguments) => {
      return returnErrorMessage(validationArguments.targetName);
    },
  })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  entryDate: Date;
}

function returnErrorMessage(field: string) {
  return `${field} is required`;
}

export class Users extends Array implements Array<User> {
}
