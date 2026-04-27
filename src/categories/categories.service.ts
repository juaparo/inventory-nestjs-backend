import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/category.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) { }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createCat = new this.categoryModel(createCategoryDto);
    return await createCat.save();
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find();
  }

  async findOne(id: string): Promise<Category> {
    const cat = await this.categoryModel.findById(id);

    if (!cat) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return cat;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const updateCategory = await this.categoryModel.findByIdAndUpdate(
      id,
      updateCategoryDto,
      { returnDocument: 'after' }
    );

    if (!updateCategory) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return updateCategory;
  }
}
