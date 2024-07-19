import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

class Cat {
  name: string;
}

@Injectable()
export class CatsService {
  private cats: Cat[] = [];
  create(createCatDto: CreateCatDto): string {
    this.cats.push(createCatDto);
    return 'ok';
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: string) {
    return `This action returns a #${id} cat`;
  }

  update(updateCatDto: UpdateCatDto): string {
    return `This action updates a #${updateCatDto.name} cat`;
  }

  remove(name: string): string {
    this.cats = this.cats.filter((cat) => cat.name !== name);
    return `This action removes a #${name} cat`;
  }
}
