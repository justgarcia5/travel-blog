class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.integer :miles
      t.string :location
      t.integer :latitude
      t.integer :longitude

      t.timestamps
    end
  end
end
