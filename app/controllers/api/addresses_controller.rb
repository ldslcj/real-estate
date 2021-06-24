class Api::AddressesController < ApplicationController
    def cities
      render json: Address.cities
    end
end
