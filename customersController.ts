import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { getRedis, setRedis } from "../../redisConfig"

interface ICustomers {
  name: string;
  document: number;
}

export default {
  async create(req: Request, res: Response) {
    const { document, name } = req.body as ICustomers
    const id = uuidv4()
    try {
      await setRedis(`user-${id}`, JSON.stringify({ document, name }))
      return res.json({ id, document, name })
    }
    catch (error) {
      return res.json({ id, document, name })
    }

  },

  async show(req: Request, res: Response) {
    const { id } = req.params
    const result: any = await getRedis(`user-${id}`)
    const value = JSON.parse(result)
    return res.json({ value })
  },

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { document, name } = req.body as ICustomers
    try {
      await setRedis(`user-${id}`, JSON.stringify({ id, document, name }))
      return res.json({ id, document, name })
    } catch (error) {
      return (error)
    }
  },

}