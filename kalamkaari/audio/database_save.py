from kalamkaari.models import WordStoreBeginner
name = 'b'
meaning = 'Second Letter of English Alphabets'
b=WordStoreBeginner(word=name, definition=meaning, audio_file='kalamkaari/audio/beginner/' + name + '.mp3')
b.save()

from kalamkaari.models import kalamkaariProfile
b=kalamkaariProfile(user_id=1)
b.save()