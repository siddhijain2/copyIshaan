from kalamkaari.models import WordStoreBeginner
name = 'A'
meaning = 'First Letter of English Alphabets'
b=WordStoreBeginner(word=name, definition=meaning)
from django.core.files import File
b.audio_file.save('A.mp3',File(open("D:\Google Photos\A.mp3","rb")))
from kalamkaari.models import WordStoreBeginner
name = 'B'
meaning = 'Second Letter of English Alphabets'
b=WordStoreBeginner(word=name, definition=meaning, audio_file= name + '.mp3')
b.save()
from kalamkaari.models import WordStoreBeginner
name = 'F'
meaning = 'Sixth Letter of English Alphabets'
b=WordStoreBeginner(word=name, definition=meaning, audio_file= name + '.mp3')
b.save()
from kalamkaari.models import WordStoreBeginner
name = 'C'
meaning = 'Third Letter of English Alphabets'
b=WordStoreBeginner(word=name, definition=meaning, audio_file= name + '.mp3')
b.save()
from kalamkaari.models import WordStoreBeginner
name = 'R'
meaning = 'Eighteenth Letter of English Alphabets'
b=WordStoreBeginner(word=name, definition=meaning, audio_file= name + '.mp3')
b.save()

from kalamkaari.models import WordStoreAdvance
name = 'ship'
meaning = 'A large boat used for carrying passengers or cargo by sea'
b=WordStoreAdvance(word=name, definition=meaning, audio_file= name + '.mp3')
b.save()
from kalamkaari.models import WordStoreAdvance
name = 'fish'
meaning = 'An animal that lives and breathes in water and swims'
b=WordStoreAdvance(word=name, definition=meaning, audio_file= name + '.mp3')
b.save()
from kalamkaari.models import WordStoreAdvance
name = 'hut'
meaning = 'A small building with one room, usually made of wood or metal'
b=WordStoreAdvance(word=name, definition=meaning, audio_file= name + '.mp3')
b.save()
from kalamkaari.models import WordStoreAdvance
name = 'lime'
meaning = 'A fruit that looks like a small green lemon'
b=WordStoreAdvance(word=name, definition=meaning, audio_file= name + '.mp3')
b.save()
from kalamkaari.models import WordStoreAdvance
name = 'socks'
meaning = 'A piece of clothing that you wear on your foot and lower leg, inside your shoe'
b=WordStoreAdvance(word=name, definition=meaning, audio_file= name + '.mp3')
b.save()
from kalamkaari.models import WordStoreAdvance
name = 'pile'
meaning = 'A number of things lying on top of one another, or an amount of something lying in a mass'
b=WordStoreAdvance(word=name, definition=meaning, audio_file= name + '.mp3')
b.save()

from kalamkaari.models import kalamkaariProfile
b=kalamkaariProfile(user_id=1)
b.save()