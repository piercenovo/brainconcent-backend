import { response, request } from 'express'

export const indexRoute = (req = request, res = response) => {
    res.json({
      message: "Welcome to API Brainconcent"
    });
}
