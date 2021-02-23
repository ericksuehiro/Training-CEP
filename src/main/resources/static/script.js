function getAddressFromZipCode({ zipCode }) {
  return fetch(`http://localhost:8080/zipcode/${zipCode}`).then(response =>
    response.json()
  )
}

const inputElement = document.getElementById('input_zipcode')

const datacellStreet = document.getElementById('datacell_street')
const datacellNeighborhood = document.getElementById('datacell_neighborhood')
const datacellCityAndState = document.getElementById('datacell_cityAndState')
const datacellZipCode = document.getElementById('datacell_zipcode')

async function handleSubmit() {
  const unformattedZipCode = inputElement.value
  const zipCode = unformattedZipCode.replace(/-/g, '')

  if (zipCode.length !== 8) {
    window.alert('O CEP precisa ter 8 caracteres!')
    return
  }

  const address = await getAddressFromZipCode({ zipCode })

  // Clear input value
  inputElement.value = ''

  // Set address to table
  datacellStreet.innerText = address.logradouro
  datacellNeighborhood.innerText = address.bairro
  datacellCityAndState.innerText = `${address.localidade}/${address.uf}`
  datacellZipCode.innerText = address.cep
}

// Zipcode mask
inputElement.addEventListener('keyup', e => {
  const zipCode = inputElement.value
  if (zipCode)
    if (zipCode.length === 8) {
      inputElement.value = `${zipCode.substr(0, 5)}-${zipCode.substr(5, 9)}`
    }
})
