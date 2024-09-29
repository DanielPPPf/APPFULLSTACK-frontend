import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlbumForm } from './albums-form';

function ProductsNewPage() {
    return (
        
        <div className="min-h-screen flex justify-center items-start mt-10 " > {}
        
            <Card className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg" > {}
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-4">Create New Album</CardTitle> {}
                </CardHeader>
                <CardContent>
                    <AlbumForm /> {}
                </CardContent>
            </Card>
        </div>

        
    );
}

export default ProductsNewPage;
