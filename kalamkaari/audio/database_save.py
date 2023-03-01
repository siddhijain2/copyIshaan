from kalamkaari.models import WordStoreBeginner

name = 'A'
meaning = 'First Letter of English Alphabets'
b=WordStoreBeginner(word=name, definition=meaning, audio_file='kalamkaari/audio/beginner/' + name + '.mp3')
  
b.save()