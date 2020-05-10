# Caeser Cipher encrypt

import string

def encrypt(text,shift):
    
    # Create a normal plain alphabet
    encrypted_text = list(range(len(text)))
    
    alphabet = string.ascii_lowercase
    
    # Create a shifted version of this alphabet
    first_half = alphabet[:shift]
    second_half = alphabet[shift:]
    
    shifted_alphabet = second_half+first_half
    print("Shifted alphabet: {}".format(shifted_alphabet))
    print('\n')
    
    for i,letter in enumerate(text.lower()):
        
        if letter in alphabet:
            original_index = alphabet.index(letter)
            new_letter = shifted_alphabet[original_index]
            encrypted_text[i] = new_letter
        else:
            encrypted_text[i] = letter

    print("Encrypted text: {}".format(''.join(encrypted_text)))
    print('\n')      
    return ''.join(encrypted_text)

encrypt('Get this message to the main server', 13)


# Caeser Cipher decrypt

import string

def decrypt(text,shift):
    
    # Create a normal plain alphabet
    decrypted_text = list(range(len(text)))
    
    alphabet = string.ascii_lowercase
    
    # Create a shifted version of this alphabet
    first_half = alphabet[:shift]
    second_half = alphabet[shift:]
    
    shifted_alphabet = second_half+first_half
    
    for i,letter in enumerate(text.lower()):
        
        if letter in alphabet:
            index = shifted_alphabet.index(letter)
            original_letter = alphabet[index]
            decrypted_text[i] = original_letter
        else:
            decrypted_text[i] = letter
            
    print("Dencrypted text: {}".format(''.join(decrypted_text)))
    return ''.join(decrypted_text)

decrypt('trg guvf zrffntr gb gur znva freire', 13)


# Caeser Cipher brute_force

def brute_force(message):

    print('\n')
    
    for n in range(26):
        print("Using a shift value of {}".format(n))
        print(decrypt(message,n))
        print('\n')

brute_force('trg guvf zrffntr gb gur znva freire')