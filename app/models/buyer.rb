class Buyer < ApplicationRecord
  belongs_to :agent
  serialize :cities, Array

#   SELECT b.first_name as buyer_name, a.first_name as agent_name, price, sq_ft, sold, p.id as property_id, city, max_price, cities
# FROM buyers as b
# INNER JOIN agents AS a ON a.id = b.agent_id
# INNER JOIN properties AS p ON p.agent_id = a.id AND p.price <= b.max_price
# INNER JOIN addresses AS ad ON ad.property_id = p.id AND ad.city = ANY('{"Draper", "Sandy"}')
# WHERE b.id = 32 AND p.sold <> true

  def self.my_homes(id, cities)
    select('b.first_name as buyer_name, a.first_name as agent_name, price, sq_ft, sold, beds, baths, p.id as property_id, city, max_price, cities')
    .from('buyers as b')
    .joins("
      INNER JOIN agents AS a ON a.id = b.agent_id
      INNER JOIN properties AS p ON p.agent_id = a.id AND p.price <= b.max_price
      INNER JOIN addresses AS ad ON ad.property_id = p.id AND ad.city = ANY('{#{cities.join(',')}}')")
    .where("b.id = ? AND p.sold <> true", id)
  end


  def self.buyers(id)
    select('*')
    .from('buyers')
    .where('agent_id = ?', id)
  end
end
