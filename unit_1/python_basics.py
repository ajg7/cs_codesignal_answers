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
#def csSchoolYearsAndGroups(years, groups):
