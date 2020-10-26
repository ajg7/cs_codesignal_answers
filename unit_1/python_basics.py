#Alphanumeric Restriction
def csAlphanumericRestriction(input_str):
        if input_str.isalpha() or input_str.isnumeric():
            return True
        else: 
            return False
        
#Opposite Reverse
def csOppositeReverse(txt):
    return txt[::-1].swapcase()

print(csOppositeReverse("DarKness"))

#Square All Digits
def csSquareAllDigits(n):
    words = list(str(n))
    result = []
    for word in words:
        squared = int(word) ** 2
        result.append(squared)
    final = "".join(map(str, result))
    return int(final)


print(csSquareAllDigits(8756))

#School Years And Groups
def csSchoolYearsAndGroups(years, groups):
    result = []
    for year in range(1, years + 1):
        for group in range(0, groups):
            result.append("%d%s" % (year, chr(group + ord("a"))))
    return ", ".join(result)

print(csSchoolYearsAndGroups(7, 4))

# Make it Jazzy
def csMakeItJazzy(chords):
    result = []
    for chord in chords:
        if chord.count(str(7)) == 1:
            result.append(chord)
        else:
            result.append(f"{chord}7")
    return result

print(csMakeItJazzy(["G7", "F", "C"]))