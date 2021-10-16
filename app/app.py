from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi import Request, File
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse

from detection.process import predict


app = FastAPI()
templating = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get('/', response_class=HTMLResponse)
def getForm(request: Request):
    return templating.TemplateResponse("index.jinja", {
        "request": request})


@app.get('/favicon.ico')
async def favicon():
    return FileResponse("/static/favicon.ico")


@app.get('/test')
def helloWorld() -> dict:
    return {"message": "Hello World"}


@app.post('/predict')
async def getForm(file: bytes = File(...)):
    res = predict(file)
    print(res)

    return {"result" : round(res, 3)}


