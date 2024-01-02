import { IsNotEmpty, Length } from 'class-validator'

export class CreateMemberTeam {
  @IsNotEmpty()
  //valida o tamanho da string.
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: "Member function should not be empty."
  })
  function: string
}