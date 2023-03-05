from kalamkaari.serializers import WordStoreBeginnerSerializer,WordStoreAdvanceSerializer
from kalamkaari.models import WordStoreBeginner,WordStoreAdvance,kalamkaariProfile

def Beginner(request):
    # return beginner word which is one greater than count stored in user entry
    print(request.user)
    print(request.user.id)
    profile=kalamkaariProfile.objects.get(user_id=request.user.id)
    print(profile)
    word=WordStoreBeginner.objects.get(id=profile.beginner_count+1)
    print('++++++++++')
    profile.beginner_count+=1
    profile.save()
    serializer = WordStoreBeginnerSerializer(word)
    print(serializer)
    print('++++++++++')
    print(serializer.data)
    return serializer.data

def Advance(request):
    # return advance word which is one greater than count stored in user entry
    profile=kalamkaariProfile.objects.get(user_id=request.user.id)
    print(profile)
    print('++++++++++++++')
    word=WordStoreAdvance.objects.get(id=profile.advance_count+1)
    profile.advance_count+=1
    profile.save()
    print('++++++++++')
    serializer = WordStoreAdvanceSerializer(word)
    print(serializer)
    print('++++++++++')
    print(serializer.data)
    return serializer.data