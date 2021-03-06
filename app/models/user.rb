class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates_email_format_of :email, :message => 'address is invalid.'

    attr_reader :password

    has_many :clips,
    foreign_key: :user_id,
    class_name: :Clip,
    dependent: :destroy

    has_one_attached :channel_photo

    has_many :messages,
    foreign_key: :user_id,
    class_name: :Message
    
    before_validation :ensure_session_token!
  
    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      user&.is_password?(password) ? user : nil
    end
    
    def self.generate_session_token
      SecureRandom::urlsafe_base64
    end
    
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
      BCrypt::Password.new(self.password_digest) == password
    end
    
    def reset_session_token!
      self.session_token = User.generate_session_token
      self.save!
      self.session_token
    end
    
    private
    
    def ensure_session_token!
      self.session_token ||= User.generate_session_token
    end
end
