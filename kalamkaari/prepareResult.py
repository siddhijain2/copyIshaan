from kalamkaari.predict import data_return
from .models import kalamkaariProfile,WordStoreBeginner,WordStoreAdvance
from kalamkaari.accuracyChecker import *

def prepareBeginnerResult(request):

    data_response={}
    print(request.user)
    profile=kalamkaariProfile.objects.get(user_id=request.user.id)
    cur_word=WordStoreBeginner.objects.get(id=profile.beginner_count)
    text_generated,possibleWord=data_return(request.data['image'].file)
    cur_accuracy,matched,suggestions=inputHandler(text_generated,cur_word.word,possibleWord)
    cur_time=request.data['time']
    best_time=int(cur_time)
    cur_streak=0
    result='OOPS! you missed!!! Try again, you are almost there....'
    print(cur_time)
    print('++++++++++++')
    print(type(cur_time))
    print(cur_streak)
    if(float(cur_accuracy)>=float(0.90)):
        best_time=min(profile.beginner_best_time,int(best_time))
        cur_streak=profile.current_streak+1
        profile.current_streak+=1
        profile.best_time=best_time
        result='Hurrah!!! You are a champ!....'
        profile.save()
    data_response['accuracy']=cur_accuracy
    data_response['cur_time']=cur_time
    data_response['best_time']=best_time
    data_response['streak']=cur_streak
    data_response['matched']=matched
    data_response['suggestions']=[]
    for each in suggestions:
        data_response['suggestions'].append(each)
    data_response['result']=result
    print(data_response)
    return data_response


def prepareAdvanceResult(request):

    data_response={}
    print(request.user)
    profile=kalamkaariProfile.objects.get(user_id=request.user.id)
    cur_word=WordStoreAdvance.objects.get(id=profile.advance_count)
    text_generated,possibleWord=data_return(request.data['image'].file)
    cur_accuracy,matched,suggestions=inputHandler(text_generated,cur_word.word,possibleWord)
    cur_time=request.data['time']
    best_time=int(cur_time)
    cur_streak=0
    result='OOPS! you missed!!! Try again, you are almost there....'
    print(cur_time)
    print('++++++++++++')
    print(type(cur_time))
    print(cur_streak)
    if(float(cur_accuracy)>=float(0.90)):
        best_time=min(profile.advance_best_time,int(best_time))
        cur_streak=profile.current_streak+1
        profile.current_streak+=1
        profile.best_time=best_time
        result='Hurrah!!! You are a champ!....'
        profile.save()
    data_response['accuracy']=cur_accuracy
    data_response['cur_time']=cur_time
    data_response['best_time']=best_time
    data_response['streak']=cur_streak
    data_response['matched']=matched
    data_response['suggestions']=[]
    for each in suggestions:
        data_response['suggestions'].append(each)
    data_response['result']=result
    print(data_response)
    return data_response



    


