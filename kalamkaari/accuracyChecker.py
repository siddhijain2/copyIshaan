import json
import random

def inputHandler(written = [], real = '', possibleWord = []):

    actual=real.lower().strip()
    predicted="".join(written)
    predicted=predicted.lower().strip()
    n = len(actual)
    m = len(predicted)
    assert m == len(possibleWord)
    # print(m)
    # print(len(possibleWord))
    # print(actual)
    # print(predicted)
    matched = []

    j = 0
    for i in range(n):
        if j == m:
            matched.append(0)
        elif actual[i] == predicted[j]:
            matched.append(1)
            j += 1
        elif predicted[j] != ' ':
            f = False
            for item in possibleWord[j]:
                if item.lower() == actual[i]:
                    f = True
            if f == True:
                matched.append(2)
            else:
                matched.append(0)
            j += 1
        else:
            while(j+1<m and predicted[j]==' ' and n-i<m-j):
                j += 1
            if actual[i] == predicted[j]:
                matched.append(1)
            else:
                f = False
                for item in possibleWord[j]:
                    if item == actual[i]:
                        f = True
                if f == True:
                    matched.append(2)
                else:
                    matched.append(0)
            j += 1


    accuracy = 0
    suggestions = {''}
    limit = 3
    file = json.load(open('kalamkaari\wordSuggestion.json'))

    for i in range(n):
        x = matched[i]
        if x == 2:
            accuracy += x/4
        else:
            accuracy += x
        if x!=1 and len(suggestions)<limit:
            suggestions.add(file['suggest'][file['type'][actual[i]]][random.randint(0, 1)])

    accuracy /= len(matched)

    suggestions.remove('')

    if len(suggestions) == 0:
        suggestions.add(file['suggest'][file['type'][actual[0]]][random.randint(0, 1)])

    return accuracy, matched, suggestions



