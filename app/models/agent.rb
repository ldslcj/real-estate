class Agent < ApplicationRecord
    has_many :properties
    has_many :buyers

#     SELECT a.id, first_name, last_name, email, sold, COUNT(*) as frequency 
# FROM agents AS a
# INNER JOIN properties p ON p.agent_id = a.id
# WHERE sold <> true
# GROUP BY a.id, first_name, last_name, email, sold
# ORDER BY frequency DESC;
    def self.unsold_homes
      select('a.id, first_name, last_name, email, sold, COUNT(*) as unsold_homes')
      .from('agents AS a')
      .joins('INNER JOIN properties p ON p.agent_id = a.id')
      .where('sold <> true')
      .group('a.id, first_name, last_name, email, sold')
      .order('unsold_homes DESC')
    end

    def self.buyers(id)
        select('*')
        .from('buyers')
        .where('agent_id = ?', id)
    end
end
