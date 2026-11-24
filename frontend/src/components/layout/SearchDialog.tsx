import { useState, useCallback, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const POPULAR_SEARCHES = ['Internet Services', 'Cloud Solutions', 'Call Centers', 'Software Houses'] as const;

const MOCK_RESULTS = [
  {
    id: 'internet',
    title: 'Internet Services - BrainNET Fiber',
    description: 'High-speed fiber internet solutions for businesses'
  },
  {
    id: 'cloud',
    title: 'Cloud Services - BrainCLOUD',
    description: 'Scalable cloud infrastructure and hosting solutions'
  }
] as const;

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual search functionality
    console.log('Search query:', query);
  }, [query]);

  const handleTermClick = useCallback((term: string) => {
    setQuery(term);
  }, []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    return MOCK_RESULTS.filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-neutral-100 border-border max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-foreground">Search BrainTEL</DialogTitle>
          <DialogDescription className="text-neutral-medium">
            Find services, solutions, and resources quickly
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-medium pointer-events-none" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for services, solutions, resources..."
              className="pl-10 bg-card border-neutral-400 text-foreground placeholder:text-neutral-medium focus:border-primary min-h-[48px]"
              autoFocus
              autoComplete="off"
            />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-neutral-medium">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.map((term) => (
                <Button
                  key={term}
                  variant="outlined"
                  size="sm"
                  type="button"
                  onClick={() => handleTermClick(term)}
                  className="bg-card border-neutral-400 text-foreground hover:bg-neutral-100 transition-colors"
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
          
          {filteredResults.length > 0 && (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              <p className="text-sm text-neutral-medium">Search results:</p>
              <div className="space-y-1">
                {filteredResults.map((result) => (
                  <div 
                    key={result.id}
                    className="p-3 rounded-lg bg-card hover:bg-neutral-100 cursor-pointer transition-colors will-change-auto"
                    role="button"
                    tabIndex={0}
                  >
                    <p className="font-medium text-foreground">{result.title}</p>
                    <p className="text-sm text-neutral-medium">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}