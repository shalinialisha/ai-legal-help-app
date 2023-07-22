from transformers import BertTokenizer, BertModel

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained("bert-base-uncased")

def generate_text(prompt):
    encoded_input = tokenizer(prompt, return_tensors='pt')
    output = model(**encoded_input)

    token_ids = encoded_input['input_ids'][0].tolist()
    decoded_text = tokenizer.decode(token_ids)

    return decoded_text


from transformers import BertTokenizer, BertModel
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained("bert-base-uncased")
text = "Replace me by any text you'd like."
encoded_input = tokenizer(text, return_tensors='pt')
output = model(**encoded_input)
