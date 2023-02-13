import { Car } from '../interfaces/car.interface'
import ItemModel from '../models/item';

const createCar = async (car: Car): Promise<Car> => {
  return await ItemModel.create(car);
}

const getCars = async (): Promise<Car[]> => {
  return await ItemModel.find()
}

const getCarById = async (id: string): Promise<Car  | null>  => {
  return await ItemModel.findById(id);
}

const updateCar = async(id: string, car: Car): Promise<Car | null> => {
  return await ItemModel.findByIdAndUpdate(id, car, { returnDocument: 'after' });
}

const deleteCar = async (id: string): Promise<Car | null> => {
  return await ItemModel.findByIdAndDelete(id);
}

export {
  createCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
}