class CreateConcepts < ActiveRecord::Migration[5.0]
  def change
    create_table :concepts do |t|
      t.string :title
      t.string :description
      t.integer :user_id
      t.integer :section_id
      t.boolean :favorited

      t.timestamps
    end
  end
end
