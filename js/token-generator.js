$( document ).ready(function() {
    tokens.forEach((token) => {
        let option = `<option>${token.label}</option>`

        $( "#token-select" ).append(option);
    });

    $( "#token-add" ).on('click', function() {
        let selected = $( "#token-select option:selected" ).text();
        let selectedToken = tokens.find(token => token.label === selected);
        let amount = $( "#token-amount" ).val();

        let template = `<div class="token" style="background-image: url(./images/${selectedToken.image})">
                          <div class="token-header"><img class="token-color" src="./icons/${selectedToken.color}.png">
                              <div class="token-name">${selectedToken.name}</div>
                              ${selectedToken.values ? '<div class="token-values">' + selectedToken.values + '</div>' : ''}
                          </div>
                          <div class="token-footer">
                              <div class="token-type">${selectedToken.type}</div>
                              ${selectedToken.text ? '<div class="token-text">' + selectedToken.text + '</div>' : ''}
                          </div>
                      </div>`

        for (i = 0; i < amount; i++) {
          $( ".sheet" ).append(template);
        }

    });

    $( "body" ).on('click', '.token', function() {
        $(this).remove();
    });
});
