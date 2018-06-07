class User < ApplicationRecord
  has_many :concepts

  devise :database_authenticatable, :registerable, 
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: %i[github]
  

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name   # assuming the user model has a name
      user.save!
    end
  end

  def rails_section
    conceptss.where("section = 5")
  end
end
