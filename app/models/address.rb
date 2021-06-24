class Address < ApplicationRecord
  belongs_to :property

  # SELECT DISTINCT city FROM addresses
  def self.cities
    select('DISTINCT city').to_json(except: :id)
  end
end
