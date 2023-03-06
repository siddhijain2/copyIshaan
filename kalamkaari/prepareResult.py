from kalamkaari.predict import data_return
from .models import kalamkaariProfile,WordStoreBeginner
from kalamkaari.accuracy import *

def prepareResult(request):

    data_response={}
    print(request.user)
    profile=kalamkaariProfile.objects.get(user_id=request.user.id)
    cur_word=WordStoreBeginner.objects.get(id=profile.beginner_count)
    text_generated=data_return(request.data['image'].file)
    cur_accuracy=accuracy(text_generated,cur_word.word)
    cur_time=request.data['time']
    best_time=int(cur_time)
    cur_streak=0
    print(cur_time)
    print('++++++++++++')
    print(type(cur_time))
    print(cur_streak)
    if(float(cur_accuracy)>=float(0.9)):
        best_time=min(profile.beginner_best_time,int(best_time))
        cur_streak=profile.current_streak+1
        profile.current_streak+=1
        profile.best_time=best_time
        profile.save()
    data_response['accuracy']=cur_accuracy
    data_response['cur_time']=cur_time
    data_response['best_time']=best_time
    data_response['streak']=cur_streak
    print(data_response)
    return data_response



    


