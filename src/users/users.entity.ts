import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

export class User {
  @Exclude({ toPlainOnly: true })
  id: number;

  @IsNotEmpty({
    message: (validationArguments) => {
      return returnErrorMessage(validationArguments.property);
    },
  })
  @IsString()
  firstName: string;

  @IsNotEmpty({
    message: (validationArguments) => {
      return returnErrorMessage(validationArguments.property);
    },
  })
  @IsString()
  lastName: string;

  @IsNotEmpty({
    message: (validationArguments) => {
      return returnErrorMessage(validationArguments.property);
    },
  })
  @IsString()
  fullName: string;

  @IsNotEmpty({
    message: (validationArguments) => {
      return returnErrorMessage(validationArguments.property);
    },
  })
  @IsEmail()
  email: string;

  @Exclude({ toPlainOnly: true })
  @IsNotEmpty()
  password: string;

  entryDate: Date;
}

function returnErrorMessage(field: string) {
  return `${field} is required`;
}

export class Users extends Array implements Array<User> {
}
