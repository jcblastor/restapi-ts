import { Request, Response } from 'express'
import ItemModel from '../models/item'
import { createCar, deleteCar, getCarById, getCars, updateCar } from '../services/item'
import { handleHttp } from '../utils/error.handler'

const getItems = async (req: Request, res: Response) => {
  try {
    const cars = await getCars();
    res.json({
      cars
    })
  } catch (err) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

const getItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const car = await getCarById(id);
    if(!car) return res.status(400).json({
      msg: 'El id que buscas no existe'
    })

    res.json({
      car
    })
  } catch (err) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

const createItem = async (req: Request, res: Response) => {
  try {
    const { name, color, gas, year, description, price } = req.body;
    const car = new ItemModel({ name, color, gas, year, description, price });
    const newCar = await createCar(car);
    res.status(201).json({
      car: newCar
    })
  } catch (err) {
    handleHttp(res, 'ERROR_CREATE_ITEM')
  }
}

const updateItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {_id, createdAt, updatedAt, ...car} = req.body;
    
    const newCar = await updateCar(id, car);

    res.json({
      car: newCar
    })
  } catch (err) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

const deleteItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCar(id);
    
    res.json({
      msg: `Car with id: ${id} has remove`
    })
  } catch (err) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export {
  getItems,
  getItemById,
  createItem,
  updateItemById,
  deleteItemById,
}