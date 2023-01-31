
# encoding=utf-8
import requests
import json
def UpdateMoney(uid,money):

    getUrl = 'http://192.168.67.6/user/getinfo?id=inputid'
    getUrl = getUrl.replace('inputid', uid)

    res = requests.get(getUrl)
    resobj = json.loads(res.text.encode("utf-8", 'ignore'))
    print(res.text.encode("utf-8", 'ignore'))

    updateUrl = 'http://192.168.67.6/user/opdata?id=inputid&hallid=inputhallid&code=inputsession&dataid=15&value=inputmoney'
    updateUrl = updateUrl.replace('inputmoney', money)
    updateUrl = updateUrl.replace('inputid', uid)
    updateUrl = updateUrl.replace('inputhallid', str(resobj['hallserver']))
    updateUrl = updateUrl.replace('inputsession', resobj['session'])
    requests.get(updateUrl)

UpdateMoney('16307', '-6000000') 

